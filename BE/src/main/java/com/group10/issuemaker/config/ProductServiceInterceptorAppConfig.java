package com.group10.issuemaker.config;

import com.group10.issuemaker.interceptor.ProductServiceInterceptor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class ProductServiceInterceptorAppConfig implements WebMvcConfigurer {

    private final ProductServiceInterceptor productServiceInterceptor;

    public ProductServiceInterceptorAppConfig(ProductServiceInterceptor productServiceInterceptor) {
        this.productServiceInterceptor = productServiceInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(productServiceInterceptor);
    }
}
