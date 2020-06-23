package com.group10.issuemaker.User;
import lombok.*;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class User {

    private String user_id;
    private String name;
    private String url;
    private boolean bChecked = false;
}
