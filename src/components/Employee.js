import React, { Component } from 'react'


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
    return (
      <div>
        {this.props.fullName}
      </div>
    )
  }
}
