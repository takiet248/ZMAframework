import React from "react";
import {
  Page,
  Avatar,
  AvatarGroup,
  Card,
  Navbar,
  Box,
  Text
} from "zmp-framework/react";

const avatar = "http://h5.zdn.vn/static/images/avatar.png";

export default () => {
  return (
    <Page className="page-avatar page-with-navbar">
      <Navbar backLink />
      <Box>
        <Card inset title="Size">
          <Box flex flexDirection="column" alignItems="center">
            <Avatar size={24} src={avatar}></Avatar>
            <Text size="normal">24px</Text>
          </Box>

          <Box flex flexDirection="column" alignItems="center">
            <Avatar size={48} src={avatar}></Avatar>
            <Text size="normal">48px</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar size={56} src={avatar}></Avatar>
            <Text size="normal">56px</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar size={96} src={avatar}></Avatar>
            <Text size="normal">96px</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar size={120} src={avatar}></Avatar>
            <Text size="normal">120px</Text>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card inset title="Variation">
          <Box flex flexDirection="column" alignItems="center">
            <Avatar online>MW</Avatar>
            <Text size="normal">Single</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <AvatarGroup>
              <Avatar avatarColor="green-lgreen" online>
                ZX
              </Avatar>
              <Avatar avatarColor="orange-red" online>
                KM
              </Avatar>
            </AvatarGroup>
            <Text>Group2</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <AvatarGroup>
              <Avatar avatarColor="green-lgreen" online>
                ZX
              </Avatar>
              <Avatar avatarColor="orange-red" online>
                KM
              </Avatar>
              <Avatar avatarColor="purple-blue" online>
                KM
              </Avatar>
            </AvatarGroup>
            <Text size="normal">Group3</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <AvatarGroup>
              <Avatar avatarColor="green-lgreen" online>
                ZX
              </Avatar>
              <Avatar avatarColor="orange-red" online>
                KM
              </Avatar>
              <Avatar avatarColor="purple-blue" online>
                KM
              </Avatar>
              <Avatar online>ZX</Avatar>
            </AvatarGroup>
            <Text size="normal">Group4</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <AvatarGroup horizontal>
              <Avatar avatarColor="green-lgreen" online>
                ZX
              </Avatar>
              <Avatar avatarColor="orange-red" online>
                KM
              </Avatar>
              <Avatar avatarColor="purple-blue" online>
                KM
              </Avatar>
              <Avatar online>ZX</Avatar>
              <Avatar online>ZX</Avatar>
            </AvatarGroup>
            <Text>Group4</Text>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card inset title="Add-on">
          <Box flex flexDirection="column" alignItems="center">
            <Avatar src={avatar} online></Avatar>
            <Text size="normal">Status</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar src={avatar} online story></Avatar>
            <Text size="normal">Status + Story</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar online>MW</Avatar>
            <Text size="normal">Status</Text>
          </Box>
          <Box flex flexDirection="column" alignItems="center">
            <Avatar story online>
              MW
            </Avatar>
            <Text size="normal">Status + Story</Text>
          </Box>
        </Card>
      </Box>
    </Page>
  );
};
