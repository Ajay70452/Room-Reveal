const FuturisticShopping = () => {
  return (
    // Use `flex-col` with the `md:flex-row` to switch from vertical to horizontal layout on medium screens and up
    <div className="flex flex-col md:flex-row bg-[#FFEAC2] min-h-screen py-16 items-center">
      <div className="max-w-4xl mx-auto mb-8 md:mb-0"> {/* Add margin-bottom for mobile view */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#80471C] leading-tight mb-6">
          Experience the <br /> Futuristic way <br /> of Shopping
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Remove <br /> tags for better text flow on mobile, use `sm:text-lg md:text-xl` for responsive text sizing */}
        <p className="text-base font-normal sm:text-2xl md:text-xl text-black leading-relaxed">
        Imagine being able to walk into a room and see exactly how a 
        new wallpaper or flooring will look  before making any commitments. 
        That's the power of Room Reveal. Our innovative web app harnesses 
        the latest technology to bring a new dimension to interior design. 
        With Room Reveal, interior designers, retailers, and homeowners 
        can visualize design elements in real-time, within actual spaces. 
        Our tool seamlessly integrates digital designs into physical 
        environments, offering an immersive and interactive experience 
        like no other.
        </p>
      </div>
    </div>
  );
};

export default FuturisticShopping;
