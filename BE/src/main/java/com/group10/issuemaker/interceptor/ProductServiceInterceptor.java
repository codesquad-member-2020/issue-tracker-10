package com.group10.issuemaker.interceptor;

import com.group10.issuemaker.login.Jwt;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class ProductServiceInterceptor implements HandlerInterceptor {

    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) {
        Cookie[] cookies = httpServletRequest.getCookies();
        String tokenName = "token";

        if (cookies == null) {
            // Todo
            //  exception 처리
            return false;
        }

        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(tokenName)) {
                String name = Jwt.parseIdFromJwt(cookie.getValue());
                return name != null;
            }
        }

        return false;
    }
}
