package com.group10.issuemaker.login;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;

public class Jwt {

    private static final String JWT_SECRET_KEY = "xpelliepppppppppppppppppppppppppxpelliepppppppppppppppppppppppppxpelliepppppppppppppppppppppppppxpelliepppppppppppppppppppppppppxpelliepppppppppppppppppppppppppxpellieppppppppppppppppppppppppp";

    private static final SecretKey key = Keys.hmacShaKeyFor(JWT_SECRET_KEY.getBytes());

    public static String generateJwt(String value) {
        return Jwts.builder().setId(value).signWith(key).compact();
    }

    public static String parseIdFromJwt(String jws) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jws).getBody().getId();
        } catch (JwtException e) {
            return null;
        }
    }
}
