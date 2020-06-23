package com.group10.issuemaker.login;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

@RestController
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/github-login")
    public RedirectView githubLogin() {
        RedirectView redirectView = new RedirectView();
        String url = loginService.getRedirectUrl();
        redirectView.setUrl(url);
        return redirectView;
    }

    @GetMapping("/login")
    public RedirectView login(@PathParam("code") String code, HttpServletResponse httpServletResponse) {
        LoginToken loginToken = loginService.getAccessToken(code);
        GithubUser user = loginService.getUserData(loginToken);
        String token = loginService.login(user);

        Cookie cookie = new Cookie("token", token);
        httpServletResponse.addCookie(cookie);

        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/");
        return redirectView;
    }

    @GetMapping("/me")
    public UserResponse getUser(@CookieValue("token") String token) {
        return loginService.getUserByJwt(token);
    }
}

