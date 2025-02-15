import JobCard from './JobCard'
import jobs from './jobs'
import './App.css'

function App() {

  const jobCards = jobs.map((job, i) => {
    return <JobCard job={job} key={i} />
  })

  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      {/* {JobCard(jobs[0])} */}
      {/* <JobCard job={jobs[0]} /> */}
      {jobCards}
    </div>
  );
}

export default App
