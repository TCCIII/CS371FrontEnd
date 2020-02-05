package com.company;
//
import java.net.*;
import java.io.*;

public class chatServer
{
    private Socket socket = null;
    private ServerSocket server = null;
    private DataInputStream streamIn = null;



    //Create a server and a connection
    public chatServer(int port) throws IOException {
        boolean done = false;
        //server started
        server = new ServerSocket(port);

        //wait for a client
        socket = server.accept();

        //connect to the client
        streamIn = new DataInputStream(new BufferedInputStream(socket.getInputStream()));
        while (!done)
        {  String line = streamIn.readUTF();
            System.out.println(line);
            done = line.equals("bye");
        }
    }

    //closes the chat
    public void close() throws IOException
    {  if (socket != null)    socket.close();
        if (streamIn != null)  streamIn.close();
    }



    public static void main(String[] args) throws IOException {
        chatServer server = null;

        server = new chatServer(Integer.parseInt(args[0]));

    }

}
