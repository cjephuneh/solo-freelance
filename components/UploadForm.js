export default function UploadForm() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      
      const response = await fetch('http://localhost:5000/upload', {  // Ensure this matches your Flask server URL
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      console.log(data);  // Do something with the response, like suggesting more questions
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <input type="file" name="file" className="mb-4" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Upload PDF
        </button>
      </form>
    );
  }