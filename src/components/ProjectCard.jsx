export default function ProjectCard({ title, description, mediaType, mediaSrc }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {mediaType === 'image' && (
          <img src={mediaSrc} alt={title} className="object-cover w-full h-full" />
        )}
        {mediaType === 'video' && (
          <video src={mediaSrc} controls className="object-cover w-full h-full" />
        )}
        {mediaType === 'iframe' && (
          <iframe src={mediaSrc} title={title} className="w-full h-full border-0" allowFullScreen />
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
      </div>
    </div>
  );
}
