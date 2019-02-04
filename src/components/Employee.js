import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
/*

const Employee = {
  id: "vweokpdods"
  fullName: "Fake Name",
  currentJob,
  goalJob,
}

const Employee = gql`
      {
  employee(id: "cjrnnfvx4006v01pd02v6kwvf"){
    id
    fullName,
    currentJob{
      title
    },
    goalJob{
      title
    }
  }
}

<Query query={Employee}>
{({ loading, error, data }) => {
  if (loading) return <div>Fetching</div>
  if (error) return <div>Error</div>
  
  const EmployeeToRender = data.employee
  
  return (
    <div>
    {EmployeeToRender.map(employee => <Employee key={employee.id} fullName={employee.fullName} />)}
    </div>
    )
  }}
  </Query>
*/
export default class Employee extends Component {
  render() {
    const EmployeeQuery = gql`
    {
      employee(id: "cjrnnfvx4006v01pd02v6kwvf"){
        id,
        fullName,
        currentJob{
          title
        },
        goalJob{
          title
        }
      }
    }`
    return (
      <Query query={EmployeeQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const EmployeeToRender = data.employee

        return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{EmployeeToRender.fullName}</h5>
                <p className="card-text">{EmployeeToRender.currentJob.title}</p>
                <p className="card-text">{EmployeeToRender.goalJob.title}</p>
              </div>
            </div>
            )
          }}
          </Query>)}
}
