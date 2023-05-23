package com.services;

import com.model.Holiday;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HolidayServiceImpl implements HolidayService{
    @Autowired
    private SessionFactory sessionFactory;
    public List<Holiday> getHoliday() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Holiday> HolidayList= session.createQuery("from Holiday",Holiday.class).list();
        transaction.commit();
        session.close();
        return HolidayList;
    }
}

