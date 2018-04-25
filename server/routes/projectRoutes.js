import Project from '../models/Project';

module.exports = (app) => {
  app.get('/api/projects', async (req, res) => {
    let projects = [];

    try {
      projects = await Project.find();
    } catch (err) {
      res.status(400).send(err);
    }

    const mapProjects = projects.map(({ _id, name }) => ({
      id: _id,
      name,
    }));

    res.send(mapProjects);
  });
};
