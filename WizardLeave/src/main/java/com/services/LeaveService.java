package com.services;

import com.model.Leave;

import java.util.List;

public interface LeaveService {
    List<Leave> getLeave() ;
    Leave create(Leave leave);
    Leave getLeaveById(int id);
    Leave updateLeave(Leave leave);
    Leave deleteLeaveById(int id);
}
