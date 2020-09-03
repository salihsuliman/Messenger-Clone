import React, { forwardRef } from 'react'
import { CardContent, Typography, Card } from '@material-ui/core'
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
       <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                    
                        color="white"
                        varient="h5"
                        component="h2"

                    >
                        {!isUser && `${message.username || 'Unkown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
           
            </div>
        
    )
})

export default Message
