package com.group10.issuemaker.login;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LoginService {

    @Value("${github_redirect_url}")
    private String GITHUB_REDIRECT_URL;

    @Value("${github_client_id}")
    private String GITHUB_CLIENT_ID;

    @Value("${github_client_secret}")
    private String GITHUB_CLIENT_SECRET;

    private String GITHUB_REQUEST_URL = "https://github.com/login/oauth";

    private final LoginUserDAO loginUserDao;

    public LoginService(LoginUserDAO loginUserDao) {
        this.loginUserDao = loginUserDao;
    }

    public String getRedirectUrl() {
        return String.format("%s/authorize?scope=read:user&client_id=%s&redirect_uri=%s", GITHUB_REQUEST_URL, GITHUB_CLIENT_ID, GITHUB_REDIRECT_URL);
    }

    public LoginToken getAccessToken(String code) {
        String requestUrl = String.format("%s/access_token?client_id=%s&client_secret=%s&redirect_uri=%s&code=%s", GITHUB_REQUEST_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_REDIRECT_URL, code);
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(requestUrl, null, LoginToken.class);
    }

    public GithubUser getUserData(LoginToken loginToken) {
        String requestUrl = "https://api.github.com/user";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.AUTHORIZATION, String.format("%s %s", loginToken.getTokenType(), loginToken.getAccessToken()));
        HttpEntity entity = new HttpEntity((httpHeaders));

        ResponseEntity<GithubUser> response = restTemplate.exchange(requestUrl, HttpMethod.GET, entity, GithubUser.class);
        return response.getBody();
    }

    public UserResponse getUserByJwt(String jws) {
        String username = Jwt.parseIdFromJwt(jws);

        // Todo
        //  user가 없을 시 unauthorization 상태 코드를 반환한다.
        return loginUserDao.findByUsername(username).orElse(null);
    }

    public void join(GithubUser user) {
        loginUserDao.save(user);
    }

    public String login(GithubUser user) {
        if (!loginUserDao.findByUsername(user.getUsername()).isPresent()) {
            join(user);
        }

        return Jwt.generateJwt(user.getUsername());
    }
}
