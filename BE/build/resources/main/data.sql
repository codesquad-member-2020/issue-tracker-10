
insert into issue (issue_id, title, content, opened_date, closed_date, opened) values (1, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened) values (2, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened) values (3, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 0);

insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (1, '#FFFFF1', '#1E90FF1', 'testing label1', 'BE');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (2, '#FFFFF2', '#1E90FF2', 'testing label2', 'BE');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (3, '#FFFFF3', '#1E90FF3', 'testing label3', 'BE');

insert into issue_label (issue_id, label_id) VALUES (1, 1);
insert into issue_label (issue_id, label_id) VALUES (1, 2);
insert into issue_label (issue_id, label_id) VALUES (1, 3);

insert into issue_label (issue_id, label_id) VALUES (2, 1);
insert into issue_label (issue_id, label_id) VALUES (2, 2);

insert into issue_label (issue_id, label_id) VALUES (2, 3);



insert into issue_label (issue_id, label_id) VALUES (3, 1);
