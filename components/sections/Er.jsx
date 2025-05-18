const Er = () => {
   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
         <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg p-12 text-center border-t-4 border-yellow-600">
            {/* Header */}
            <h1 className="text-4xl font-bold text-yellow-700 mb-6">
               Website Currently Inactive
            </h1>

            {/* Body */}
            <p className="text-gray-700 text-lg mb-6">
               This website is temporarily unavailable as the final steps of the
               project are pending.
            </p>
            <p className="text-gray-700 text-lg mb-6">
               We are currently awaiting completion of the required formalities
               to make the site fully operational.
            </p>
            <p className="text-gray-700 text-lg mb-8">
               We appreciate your patience and understanding. The website will
               be live once all requirements are fulfilled.
            </p>

            {/* Call to Action */}
            <p className="text-gray-800 font-semibold text-lg mb-8">
               For further information or assistance, please contact the
               developer.
            </p>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
               <p className="text-gray-500 text-sm mb-2">
                  Reference ID: #SITE-HOLD-2025-20203-234
               </p>
               <p className="text-gray-500 text-sm">Issued on: May 18, 2025</p>
            </div>
         </div>
      </div>
   );
};

export default Er;
