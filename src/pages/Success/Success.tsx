import PageWrapper from '../../components/PageWrapper';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h1 className="text-blue-600 text-3xl font-bold text-center">
            <CheckCircle className="inline-block mr-2" /> Order Success Page
          </h1>
      </div>
    </PageWrapper>
  );
};

export default Success;
