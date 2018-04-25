import Project from '../models/Project';

module.exports = (app) => {
  app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();

    res.send(projects);
  });
};
