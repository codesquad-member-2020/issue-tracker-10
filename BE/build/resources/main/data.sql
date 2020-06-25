INSERT INTO milestone (title, description, due_date ) VALUES ('spring 공부', 'spring 공부하기', NOW());
INSERT INTO milestone (title, description, due_date ) VALUES ('java 공부', 'java 공부하기', NOW());
INSERT INTO milestone (title, description, due_date ) VALUES ('더워', 'java 공부하기', NOW());


insert into user (user_id, name, url) VALUES (1, 'bohyeon', 'https://avatars1.githubusercontent.com/u/49897409?s=460&u=252ad899279bd3e4e5180856793b2f6b3202a647&v=4');
insert into user (user_id, name, url) VALUES (2, 'xp', 'https://avatars3.githubusercontent.com/u/52371228?s=460&u=a8d3d9d22c8a07e5393f265f211585f1a956f3d8&v=4');

insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (1, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 1, 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (2, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 1, 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (3, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 0, 2, 1);


insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (1, '#fff', 'rgb(203,92,208)',  'testing label1', '코드스쿼드 여러분');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (2, '#fff', 'rgb(254,40,119)',  'testing label2', '한 학기동안 수고 많았어요');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (3, '#fff', 'rgb(86,185,42)',   'testing label3', '겨울에 시작해 봄을 지나');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (4, '#fff', 'rgb(118,148,231)', 'testing label4', '무더운 여름이 되었네요');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (5, '#000', 'rgb(128,177,104)', 'testing label5', '모두 원하는 것을');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (6, '#000', 'rgb(128,177,104)', 'testing label6', '이루길 바라요');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (7, '#000', 'rgb(128,177,104)', 'testing label7', '힘든 과정을 견딜 수 있었던 것은 다 여러분 덕분이에요');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (8, '#000', 'rgb(128,177,104)', 'testing label7', '우사인 볼트가 세상에서 가장 빠른 이유는');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (9, '#000', 'rgb(128,177,104)', 'testing label7', '끝까지 갔기 때문이에요');




insert into issue_label (issue_id, label_id) VALUES (1, 1);
insert into issue_label (issue_id, label_id) VALUES (1, 2);
insert into issue_label (issue_id, label_id) VALUES (1, 3);
insert into issue_label (issue_id, label_id) VALUES (2, 1);
insert into issue_label (issue_id, label_id) VALUES (2, 2);
insert into issue_label (issue_id, label_id) VALUES (2, 3);
insert into issue_label (issue_id, label_id) VALUES (3, 1);

insert into issue_assignee (assignee_id, issue_id) VALUES (1,1);

insert into comment (comment_id, issue_id, author_id, description) VALUES (1, 1, 1, '호텔 신라 코딩');
insert into comment (comment_id, issue_id, author_id, description) VALUES (2, 1, 1, '호텔 신라 코딩?');

insert into comment (comment_id, issue_id, author_id, description) VALUES (3, 2, 1, '호텔 신라 코딩2');
insert into comment (comment_id, issue_id, author_id, description) VALUES (4, 3, 1, '호텔 신라 코딩3');
