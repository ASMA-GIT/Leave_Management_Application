package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "leaves")
public class Leave {
    @Id
    @Column(name="leave_id")
    private int leave_id;

    @Column(name="emp_id")
    private int emp_id;

    @Column(name="leave_type_id")
    private int leave_type_id;

    @Column(name="from_date")
    private Date from_date;

    @Column(name="to_date")
    private Date to_date;
    @Column(name="comments")
    private String comments;

    @Column(name="leave_status_id")
    private int leave_status_id;

    public int getLeave_status_id() {
        return leave_status_id;
    }

    public void setLeave_status_id(int leave_status_id) {
        this.leave_status_id = leave_status_id;
    }



    public int getLeave_id() {
        return leave_id;
    }

    public void setLeave_id(int leave_id) {
        this.leave_id = leave_id;
    }

    public int getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(int emp_id) {
        this.emp_id = emp_id;
    }

    public int getLeave_type_id() {
        return leave_type_id;
    }

    public void setLeave_type_id(int leave_type_id) {
        this.leave_type_id = leave_type_id;
    }

    public Date getFrom_date() {
        return from_date;
    }

    public void setFrom_date(Date from_date) {
        this.from_date = from_date;
    }

    public Date getTo_date() {
        return to_date;
    }

    public void setTo_date(Date to_date) {
        this.to_date = to_date;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}

