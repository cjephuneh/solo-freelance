// pages/index.jsx

import React from 'react';
const UploadForm = React.lazy(() => import('@/components/UploadForm.client'));

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold my-4">Upload PDF</h1>
      <React.Suspense fallback={<p>Loading form...</p>}>
        <UploadForm />
      </React.Suspense>
    </div>
  );
}
