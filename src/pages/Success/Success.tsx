import PageWrapper from '../../components/PageWrapper';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <PageWrapper>
      <h1 className="text-blue-600 text-3xl font-bold">
          <CheckCircle className="inline-block mr-2" /> Order Success Page
        </h1>
    </PageWrapper>
  );
};

export default Success;
