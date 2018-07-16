<<<<<<< HEAD
package com.niit.dao;

import java.util.List;

import com.niit.model.Job;

public interface JobDao {
  void saveJob(Job job);
  List<Job> getActiveJobs();//active is true,for other roles
  //For admin to return all jobs
  List<Job> getInActiveJobs();
void updateJob(Job job);
}
=======
package com.niit.dao;

import java.util.List;

import com.niit.model.Job;

public interface JobDao {
  void saveJob(Job job);
  List<Job> getActiveJobs();//active is true,for other roles
  //For admin to return all jobs
  List<Job> getInActiveJobs();
void updateJob(Job job);
}
>>>>>>> ed1052ccbe7ed6879768238e01a0428dabbae07a
