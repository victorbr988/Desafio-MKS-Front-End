import LoadingItem from '../Shimmer/LoadingItem';
import { SkeletonGroup } from './Skeleton/ItensSkeleton';

export const LoadingPanel: React.FC = () => {
  return (
    <SkeletonGroup>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </SkeletonGroup>
    
  );
};
