import { UserCard } from '../../components/UserCard/UserCard';

export default {
  component: UserCard,
  title: 'Components/UserCard'
};

export const unFollowed = () => (
  <UserCard
    avatar="https://zestadionu.pl/s/i/202009/default/mariusz-pudzianowski-1601290967.jpg"
    displayName="Mariusz Pudzianowski"
    id="12345"
  />
);

export const Followed = () => (
  <UserCard
    avatar="https://zestadionu.pl/s/i/202009/default/mariusz-pudzianowski-1601290967.jpg"
    displayName="Mariusz Pudzianowski"
    id="12345"
    followed
  />
);
