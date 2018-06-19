import * as React from 'react'

export default function Notifications(props) {
  const requestsNotifications = props.users[props.logUserId].notification.request
  const matchNotifications = props.users[props.logUserId].notification.match
  return (<div>
      <div><ul>{requestsNotifications.map(req => { return <li key = {req.requesterId}> User: {props.users[req.requesterId].name} </li> })}</ul></div>
      <div><ul>{matchNotifications.map(req => { return <li key = {req.requesterId}> User: {props.users[req.requesterId].name} </li> })}</ul></div>

    </div>)

    }


    //   <div><ul>{props.users[props.logUserId].request.map(req => { return <li key = {req.requesterId}> {req.requesterId} </li> })}</ul></div>

    //   <div><ul>{props.matchs.map(match => { return <li key = {match.requesterId}> {match.requesterId} </li> })}</ul></div>
