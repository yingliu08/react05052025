import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students
    it should render a list of Student components
*/

// implement a StudentsList component here
export function StudentsListFn(props: { students: StudentType[] }) {
  return (
    <div>
      Students List
      {props.students.map((student) => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}

export class StudentsListClass extends Component<{ students: StudentType[] }> {
  render() {
    return (
      <div>
        Students List
        {this.props.students.map((student) => (
          <StudentClass key={student.id} student={student} />
        ))}
      </div>
    );
  }
}
