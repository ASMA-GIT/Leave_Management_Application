package com.services;

import com.model.Admin;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private SessionFactory sessionFactory;
    public List<Admin> getAdmin() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Admin> AdminList= session.createQuery("from Admin",Admin.class).list();
        transaction.commit();
        session.close();
        return AdminList;
    }
}

