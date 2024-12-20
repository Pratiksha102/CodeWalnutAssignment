import { useState } from "react";
import { Plus, Clock } from "lucide-react";
import { TimerList } from "./components/TimerList";
import { AddTimerModal } from "./components/AddTimerModal";
import { Toaster } from "sonner";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Conditionally position the Toaster based on screen size */}
      <Toaster
        position={
          typeof window !== 'undefined' && window.innerWidth < 640
            ? 'bottom-center' // For mobile devices (screen width < 640px)
            : 'top-right' // For desktop devices (screen width >= 640px)
        }
        toastOptions={{
          style: {
            // Optional: Customizations for your Toaster’s style can go here
            zIndex: 50, // Ensure it's above most content
          },
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          {/* Adding Flex for UI task 1 */}
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer</h1>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>

        <TimerList />
      </div>

      <AddTimerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Home;
