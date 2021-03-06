package com.group10.issuemaker.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;

@RestController
public class UserController {

    private final UserDAO userDao;

    public UserController(DataSource dataSource) {
        this.userDao = new UserDAO(dataSource);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userDao.findAllUses();
    }
}
