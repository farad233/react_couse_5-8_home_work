import React from "react";
import { Card, Container, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useData from "../hooks/useData";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";

function Users() {
  const [users, isLoading] = useData("/users", []);

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      <Grid columns={4}>
        {users.map((user) => (
          <Grid.Column>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </Card.Header>
                <Card.Meta>
                  <span className="date">{user.email}</span>
                </Card.Meta>
                <Card.Description>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
}

export default Users;
