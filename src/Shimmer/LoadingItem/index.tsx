import Panel from "../../components/panel";
import Skeleton from "../../components/Skeleton";
import { Container } from "./style";

const LoadingItem: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="image-item-skeleton"/>
          <Skeleton className="row-skeleton"/>
          <Skeleton className="row-skeleton"/>
        </span>
      </Panel>
    </Container>
  );
};
export default LoadingItem;

