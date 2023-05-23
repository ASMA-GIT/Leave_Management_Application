package com.services;

import com.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private SessionFactory sessionFactory;
    public List<Employee> getEmployee() {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<Employee> EmployeeList= session.createQuery("from Employee",Employee.class).list();
        transaction.commit();
        session.close();
        return EmployeeList;
    }
    public Employee create(Employee employee){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(employee);
        transaction.commit();
        session.close();
        return employee;
    }
    public Employee getEmployeeById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Employee employee = session.get(Employee.class,id);
        transaction.commit();
        session.close();
        return employee;
    }

    public Employee updateEmployee(Employee employee){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.saveOrUpdate(employee);
        transaction.commit();
        session.close();
        return employee;
    }
    public Employee updateEmployeeById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Employee employee = session.get(Employee.class,id);
        session.saveOrUpdate(employee);
        transaction.commit();
        session.close();
        return employee;
    }

    public Employee deleteEmployeeById(int id){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Employee employee = session.get(Employee.class,id);
        session.delete(employee);
        transaction.commit();
        session.close();
        return employee;
    }
}
