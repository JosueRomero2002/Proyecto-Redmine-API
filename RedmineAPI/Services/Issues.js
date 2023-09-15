import axios from "axios";


export async function issueUploader(
    id,
    project_id,
    project_name,
    tracker_id,
    tracker_name,
    assigned_to ,
    status_id,
    status_name,
    status_is_closed,
    priority_id,
    author_id,
    author_name,
    subject,
    description,
    start_date,
    due_date,
    done_ratio,
    is_private,
    estimated_hours,
    total_estimated_hours,
    spent_hours,
    created_on,
    updated_on,
    closed_on,
) {
  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_SOME_KEY}/posts/createPost`,
    issue: {
        id,
        project_id,
        project_name,
        tracker_id,
        tracker_name,
        assigned_to ,
        status_id,
        status_name,
        status_is_closed,
        priority_id,
        author_id,
        author_name,
        subject,
        description,
        start_date,
        due_date,
        done_ratio,
        is_private,
        estimated_hours,
        total_estimated_hours,
        spent_hours,
        created_on,
        updated_on,
        closed_on,
    },
    withCredentials: true,
  };
  const response = await axios.request(options);

  return response.data;
}


/*

{
  "issue": {
    "id": 241,
    "project_id": 19,
    "project_name": "GTI-0868,0498",
    "tracker_id": 2,
    "tracker_name": "Support",
    "status_id": 1,
    "status_name": "New",
    "status_is_closed": false,
    "priority_id": 2,
    "priority_name": "Normal",
    "author_id": 33,
    "author_name": "Grupo 1 GTI",
    "subject": "test11",
    "description": "testttt",
    "start_date": "2023-06-13",
    "due_date": null,
    "done_ratio": 0,
    "is_private": false,
    "estimated_hours": null,
    "total_estimated_hours": null,
    "spent_hours": 0.0,
    "total_spent_hours": 0.0,
    "created_on": "2023-06-13T15:46:32Z",
    "updated_on": "2023-06-13T15:46:32Z",
    "closed_on": null
  }
}



*/