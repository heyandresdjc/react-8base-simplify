import React, { Component } from 'react'
import Employee from "./Employee";
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default class Employees extends Component {
  render() {
      const EmployeesToRender = [
          {
              id: '1',
              fullName: "Andres De Jesus Cabrera"
          },
          {
              id: '2',
              fullName: "Jonah Martinez"
          },
          {
              id:'3',
              fullName: "Brain Quesada"
          },
          {
              id:'4',
              fullName: "Carlos Correra"
          }
      ]

      const EmployeeList = gql`
      {
          employeesList{
              items{
                  id,
                  fullName
                  }
                }
            }`
    
    return (
        // <Query query={EmployeeList}>
        // {
        //     ({data}) => EmployeesToRender.map(employee => <Employee key={employee.id} fullName={employee.fullName} />)
        // }
        // </Query>
        <Query query={EmployeeList}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const EmployeesToRender = data.employeesList.items
        
            return (
                <div>
                {EmployeesToRender.map(employee => <Employee key={employee.id} fullName={employee.fullName} />)}
                </div>
            )
            }}
        </Query>
    )
  }
}
