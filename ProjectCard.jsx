{/*import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, IconButton, Divider } from '@mui/material';
import { AttachFile, Person, Message, Edit, Delete, AccessTime, CheckCircle } from '@mui/icons-material';

const ProjectCard = ({ project, onDelete, onClick }) => {
  return (
    <Card variant="outlined" style={{ margin: '10px', border: '1px solid #424242' }} onClick={onClick}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box>
            <Typography variant="h6">{project.name}</Typography>
            <Typography color="textSecondary">{project.subtitle}</Typography>
          </Box>
          <Box>
            <IconButton color="primary">
              <Edit />
            </IconButton>
            <IconButton color="secondary" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <Person style={{ marginRight: '4px' }} />
            <Typography>{project.members} Members</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AttachFile style={{ marginRight: '4px' }} />
            <Typography>{project.attachments} Attach</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Message style={{ marginRight: '4px' }} />
            <Typography>{project.comments}</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <CheckCircle style={{ marginRight: '4px' }} />
            <Typography>{project.status}</Typography>
          </Box>
        </Box>
        <Divider style={{ margin: '10px 0' }} />
        <LinearProgress variant="determinate" value={project.progress} />
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Progress</Typography>
          <Typography variant="body2">
            <AccessTime style={{ marginRight: '4px' }} />
            {project.daysLeft} Days Left
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;*/}
import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, IconButton, Divider } from '@mui/material';
import { AttachFile, Person, Message, Edit, Delete, AccessTime, CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/system';

const StatusBox = styled(Box)(({ status }) => {
  let backgroundColor = '#ffffff'; // Default color

  switch (status) {
    case 'Started':
      backgroundColor = '#ff0000'; // Red
      break;
    case 'Approval':
      backgroundColor = '#ffa500'; // Orange
      break;
    case 'Completed':
      backgroundColor = '#00ff00'; // Green
      break;
    default:
      backgroundColor = '#ffffff'; // Default color
      break;
  }

  return {
    backgroundColor,
    padding: '2px 6px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff'
  };
});

const ProjectCard = ({ project, onDelete, onClick }) => {
  return (
    <Card
      variant="outlined"
      style={{ margin: '10px', border: '1px solid #424242', backgroundColor: '#191c24' }}
      onClick={onClick}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box>
            <Typography variant="h6" color="white">{project.name}</Typography>
            <Typography color="#FFD700">{project.subtitle}</Typography> {/* لون النص الفرعي لتفريقه */}
          </Box>
          <Box>
            <IconButton color="primary">
              <Edit />
            </IconButton>
            <IconButton color="secondary" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <Person style={{ marginRight: '4px', color: 'white' }} />
            <Typography color="white">{project.members} Members</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AttachFile style={{ marginRight: '4px', color: 'white' }} />
            <Typography color="white">{project.attachments} Attach</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Message style={{ marginRight: '4px', color: 'white' }} />
            <Typography color="white">{project.comments}</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <CheckCircle style={{ marginRight: '4px', color: 'white' }} />
            <Typography color="white">{project.status}</Typography>
          </Box>
        </Box>
        <Divider style={{ margin: '10px 0', backgroundColor: 'white' }} />
        <LinearProgress variant="determinate" value={project.progress} style={{ backgroundColor: '#424242', color: 'white' }} />
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="white">Progress</Typography>
          <StatusBox status={project.status}>
            <AccessTime style={{ marginRight: '4px' }} />
            <Typography variant="body2" color="white">{project.daysLeft} Days Left</Typography>
          </StatusBox>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

