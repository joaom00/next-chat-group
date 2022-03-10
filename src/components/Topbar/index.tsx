import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { FC } from 'react';
import Loading from './Loading';
import { ChannelId, Container, Text } from './style';
type TopbarProps = {
   channelId: string;
};

const Topbar: FC<TopbarProps> = ({ channelId }) => {
   const { user } = useUserContext();

   const { isLoading, isError, data } = useFetchChannels({
      userId: `${user?.id}`
   });

   if (isLoading) return <Loading />;

   //!TODO refatorar
   if (isError || !data) return <p>Error...</p>;

   const selectedChannel = data.find(
      (channel) => channel.id === parseInt(channelId, 10)
   );

   return (
      <Container>
         <Text>{selectedChannel.topic}</Text>
         <ChannelId>#{selectedChannel.id}</ChannelId>
      </Container>
   );
};

export default Topbar;
