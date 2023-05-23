package com.services;

import com.model.Leave;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LeaveServiceImpl implements LeaveService{
    @Autowired
    private SessionFactory sessionFactory;
    public List<Leave> getLeave() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Leave> LeaveList= session.createQuery("from Leave",Leave.class).list();
        transaction.commit();
        session.close();
        return LeaveList;
    }
    public Leave create(Leave leave){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(leave);
        transaction.commit();
        session.close();
        return leave;
    }
    public Leave getLeaveById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Leave leave = session.get(Leave.class,id);
        transaction.commit();
        session.close();
        return leave;
    }

    public Leave updateLeave(Leave leave){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(leave);
        transaction.commit();
        session.close();
        return leave;
    }

    public Leave deleteLeaveById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Leave leave = session.get(Leave.class,id);
        session.delete(leave);
        transaction.commit();
        session.close();
        return leave;
    }
}

