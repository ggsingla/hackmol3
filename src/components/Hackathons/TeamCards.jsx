import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";

import {profile} from '../../State/Actions/auth';
import { useEffect, useState } from "react";
import TeamModal from "./TeamModal";
import {useDispatch} from "react-redux";

function HackathonCard({ team }) {
  console.log(team);

  const [pinned, setPinned] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Grid
        sx={{
          mt: 4,
        }}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <Card
          elevation={10}
          sx={{
            borderRadius: 2,
            background: "#fff",
            p: "1em",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Avatar
            src="https://user-images.githubusercontent.com/76390562/155853845-29cfeeec-b739-4435-b63c-1fa664b3e344.png"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(30%, -30%)",
              filter: `${!pinned ? "grayscale(100%)" : ""}`,
            }}
            onClick={() => setPinned(!pinned)}
          />
          <CardContent>
            <Stack
              id="team name"
              direction="row"
              spacing={1}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                color="text.primary"
                component="div"
              >
                {team.teamname}
              </Typography>
              {/* <Typography sx={{ fontWeight: "500" }}>
                <Typography
                  component="span"
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  {team.members.length}
                </Typography>
                /{team.maxSize}
              </Typography> */}
            </Stack>
            <Stack
              id="members"
              spacing={2}
              sx={{ marginBlock: "1em", justifyContent: "space-between" }}
            >
              <Stack
                direction="row"
                sx={{ width: "100%", justifyContent: "space-between" }}
              >
                <Typography
                  variant="button"
                  fontWeight={600}
                  color="text.secondary"
                >
                  Members
                </Typography>
                <Typography variant="body1">
                  <List sx={{ p: 0, m: 0 }}>
                    {team.teammembers.map((member) => (
                      <ListItem sx={{ p: 0 }}>
                        <ListItemText
                          align="right"
                          sx={{ p: 0, m: 0 }}
                          primary={member}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ width: "100%", justifyContent: "space-between" }}
              >
                <Typography
                  variant="button"
                  fontWeight={600}
                  color="text.secondary"
                >
                  Required
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{
                    fontWeight: "500",
                    textAlign: "right",
                    maxWidth: "60%",
                  }}
                >
                  {team.requirements}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
          <CardActions>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                variant="contained"
                sx={{ width: "100%" }}
              >
                Reach Out
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <TeamModal team={team} open={open} handleClose={handleClose} />
    </>
  );
}
// sample object needed from API:
const Team = {
  name: 'Geeky Builders',
  desp: 'We are looking for an ethusiaist Desiger and backend developer, who can help us in making our idea into a reality. We are not looking for professional level of work but a little peak on your previous projects would help us build a trust in you. We are always looking to expand our team.',
  id: 1,
  members: ['Marley Press', 'Marley Press', 'Marley Press'],
  required: 'Designer, Backend Dev',
}
export default function TeamCards() {
  const sel=useSelector(state=>state.team);
  const [Team,setTeam]=useState([]);

  sel.then(data=>{
    setTeam(data);
  });

   
  return (
    <Grid sx={{ position: 'initial' }} container spacing={6}>
      {Team.map((team,index)=>(
        
        <HackathonCard team={team} key={index}/>
      ))}
      
      
    </Grid>
  )
}