package com.fittrack.fittrack_core.service.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtUtil {
    // Replace with secure secret stored in env / vault. Here we generate a key for example.
    private final Key key = Keys.hmacShaKeyFor(System.getenv().getOrDefault("JWT_SECRET","your-256-bit-secret-should-be-long").getBytes());

    private final long EXPIRATION_MS = 1000L * 60 * 60 * 24; // 24 hours

    public String generateToken(Long appUserId, String roles, Map<String, Object> additionalClaims) {
        long now = System.currentTimeMillis();
        var builder = Jwts.builder()
                .setSubject(String.valueOf(appUserId))
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + EXPIRATION_MS))
                .claim("roles", roles);

        if(additionalClaims != null) {
            additionalClaims.forEach(builder::claim);
        }
        return builder.signWith(key, SignatureAlgorithm.HS256).compact();
    }
}
