{/*import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Box, Button, Typography, IconButton, Menu, MenuItem, Divider, Snackbar } from '@mui/material';
import { Add, FilterList } from '@mui/icons-material';
import { styled } from '@mui/system';

const initialProjects = [
  {
    name: 'UI/UX Design',
    subtitle: 'Social Geek Made',
    attachments: 5,
    members: 5,
    comments: 10,
    progress: 50,
    daysLeft: 35,
    status: 'Started',
    employees: ['John Doe', 'Jane Smith', 'Alex Johnson'],
  },
  {
    name: 'Website Design',
    subtitle: 'Practice to Perfect',
    attachments: 4,
    members: 4,
    comments: 3,
    progress: 70,
    daysLeft: 15,
    status: 'Completed',
    employees: ['Alice Brown', 'Michael White', 'Chris Green'],
  },
  {
    name: 'App Development',
    subtitle: 'Rhinestone',
    attachments: 7,
    members: 6,
    comments: 5,
    progress: 80,
    daysLeft: 25,
    status: 'Approval',
    employees: ['Sarah Blue', 'David Black', 'Nancy Gray'],
  },
  {
    name: 'Marketing Campaign',
    subtitle: 'Brand Boost',
    attachments: 3,
    members: 8,
    comments: 12,
    progress: 60,
    daysLeft: 20,
    status: 'Started',
    employees: ['Tom Hardy', 'Emma Stone', 'Robert Downey'],
  },
  {
    name: 'SEO Optimization',
    subtitle: 'Web Presence',
    attachments: 6,
    members: 4,
    comments: 7,
    progress: 40,
    daysLeft: 10,
    status: 'Started',
    employees: ['Chris Hemsworth', 'Scarlett Johansson', 'Mark Ruffalo'],
  },
  {
    name: 'Content Creation',
    subtitle: 'Creative Minds',
    attachments: 2,
    members: 5,
    comments: 5,
    progress: 75,
    daysLeft: 18,
    status: 'Approval',
    employees: ['Leonardo DiCaprio', 'Kate Winslet', 'Brad Pitt'],
  },
  {
    name: 'Graphic Design',
    subtitle: 'Design Hub',
    attachments: 8,
    members: 7,
    comments: 11,
    progress: 55,
    daysLeft: 22,
    status: 'Completed',
    employees: ['Meryl Streep', 'Tom Hanks', 'Denzel Washington'],
  },
  {
    name: 'E-commerce Platform',
    subtitle: 'ShopEasy',
    attachments: 9,
    members: 9,
    comments: 20,
    progress: 85,
    daysLeft: 30,
    status: 'Started',
    employees: ['Jennifer Lawrence', 'Hugh Jackman', 'Morgan Freeman'],
  },
  {
    name: 'Product Launch',
    subtitle: 'New Horizons',
    attachments: 1,
    members: 6,
    comments: 2,
    progress: 90,
    daysLeft: 5,
    status: 'Approval',
    employees: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
  }
];

const AppContainer = styled(Box)({
  backgroundColor: '#f5f5f5', // Set this to the color seen in the image
  minHeight: '100vh',
  padding: '20px',
});

const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filter) => {
    setAnchorEl(null);
    setFilter(filter);
  };

  const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    const newProject = {
      name: 'New Project',
      subtitle: 'New Subtitle',
      attachments: 0,
      members: 1,
      comments: 0,
      progress: 0,
      daysLeft: 30,
      status: 'Started',
      employees: ['New Employee'],
    };
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setSnackbarMessage(`Employees: ${project.employees.join(', ')}`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <AppContainer>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Projects</Typography>
        <Box>
          <Button variant="contained" color="primary" onClick={handleAddProject} startIcon={<Add />}>
            Create Project
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleFilterClick}
            startIcon={<FilterList />}
            style={{ marginLeft: '10px' }}
          >
            Filter
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleFilterClose(filter)}>
            <MenuItem onClick={() => handleFilterClose('All')}>All</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Started')}>Started</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Approval')}>Approval</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Completed')}>Completed</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} onDelete={() => handleDeleteProject(index)} onClick={() => handleCardClick(project)} />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </AppContainer>
  );
};

export default App;*/}
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Box, Button, Typography, Menu, MenuItem, Snackbar } from '@mui/material';
import { Add, FilterList } from '@mui/icons-material';
import { styled } from '@mui/system';

const initialProjects = [
  // (بيانات المشاريع كما هي)
  {
    name: 'UI/UX Design',
    subtitle: 'Social Geek Made',
    attachments: 5,
    members: 5,
    comments: 10,
    progress: 50,
    daysLeft: 35,
    status: 'Started',
    employees: ['John Doe', 'Jane Smith', 'Alex Johnson'],
  },
  {
    name: 'Website Design',
    subtitle: 'Practice to Perfect',
    attachments: 4,
    members: 4,
    comments: 3,
    progress: 70,
    daysLeft: 15,
    status: 'Completed',
    employees: ['Alice Brown', 'Michael White', 'Chris Green'],
  },
  {
    name: 'App Development',
    subtitle: 'Rhinestone',
    attachments: 7,
    members: 6,
    comments: 5,
    progress: 80,
    daysLeft: 25,
    status: 'Approval',
    employees: ['Sarah Blue', 'David Black', 'Nancy Gray'],
  },
  {
    name: 'Marketing Campaign',
    subtitle: 'Brand Boost',
    attachments: 3,
    members: 8,
    comments: 12,
    progress: 60,
    daysLeft: 20,
    status: 'Started',
    employees: ['Tom Hardy', 'Emma Stone', 'Robert Downey'],
  },
  {
    name: 'SEO Optimization',
    subtitle: 'Web Presence',
    attachments: 6,
    members: 4,
    comments: 7,
    progress: 40,
    daysLeft: 10,
    status: 'Started',
    employees: ['Chris Hemsworth', 'Scarlett Johansson', 'Mark Ruffalo'],
  },
  {
    name: 'Content Creation',
    subtitle: 'Creative Minds',
    attachments: 2,
    members: 5,
    comments: 5,
    progress: 75,
    daysLeft: 18,
    status: 'Approval',
    employees: ['Leonardo DiCaprio', 'Kate Winslet', 'Brad Pitt'],
  },
  {
    name: 'Graphic Design',
    subtitle: 'Design Hub',
    attachments: 8,
    members: 7,
    comments: 11,
    progress: 55,
    daysLeft: 22,
    status: 'Completed',
    employees: ['Meryl Streep', 'Tom Hanks', 'Denzel Washington'],
  },
  {
    name: 'E-commerce Platform',
    subtitle: 'ShopEasy',
    attachments: 9,
    members: 9,
    comments: 20,
    progress: 85,
    daysLeft: 30,
    status: 'Started',
    employees: ['Jennifer Lawrence', 'Hugh Jackman', 'Morgan Freeman'],
  },
  {
    name: 'Product Launch',
    subtitle: 'New Horizons',
    attachments: 1,
    members: 6,
    comments: 2,
    progress: 90,
    daysLeft: 5,
    status: 'Approval',
    employees: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
  }
];

const AppContainer = styled(Box)({
  backgroundColor: '#000000', // خلفية الشاشة سوداء
  minHeight: '100vh',
  padding: '20px',
});

const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filter) => {
    setAnchorEl(null);
    setFilter(filter);
  };

  const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    const newProject = {
      name: 'New Project',
      subtitle: 'New Subtitle',
      attachments: 0,
      members: 1,
      comments: 0,
      progress: 0,
      daysLeft: 30,
      status: 'Started',
      employees: ['New Employee'],
    };
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setSnackbarMessage(`Employees: ${project.employees.join(', ')}`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <AppContainer>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h4" color="white">Projects</Typography>
        <Box>
          <Button variant="contained" color="primary" onClick={handleAddProject} startIcon={<Add />}>
            Create Project
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleFilterClick}
            startIcon={<FilterList />}
            style={{ marginLeft: '10px' }}
          >
            Filter
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleFilterClose(filter)}>
            <MenuItem onClick={() => handleFilterClose('All')}>All</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Started')}>Started</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Approval')}>Approval</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Completed')}>Completed</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={1}> {/* تقليل الفجوة بين العناصر */}
        {filteredProjects.map((project, index) => (
          <Grid item xs={4} key={index}> {/* حجم الأعمدة بدون تغييرات للأحجام المختلفة */}
            <ProjectCard project={project} onDelete={() => handleDeleteProject(index)} onClick={() => handleCardClick(project)} />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </AppContainer>
  );
};

export default App;
