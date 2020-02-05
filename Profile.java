package com.company;
import java.lang.*;

public class Profile {

    private String username;
    private String password;

//Constructer for profile
    public Profile(String username, String password) {
        this.username = username;
        this.password = password;
    }


    //method to set username
    public void setUserName(String name)
    {
        this.username = name;
    }

    //method to set password
    public void setPassword(String password)
    {
        this.password = password;
    }
    //getter for username
    public String getUserName()
    {
        return username;
    }

    // getter for password
    public String getPassword()
    {
        return password;
    }

    //Checks all the data is right by printing it to the screen
    public void printProfile()
    {
        System.out.println("Username:"+ username );
        System.out.println("Password:"+ password );
    }
}
