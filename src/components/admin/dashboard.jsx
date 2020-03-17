import React from "react";
import SideBar from "./sidebadr";
import { Route } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <switch>
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </switch>
    </div>
  );
};

export default Dashboard;
