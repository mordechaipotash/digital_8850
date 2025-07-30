import React, { useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Eraser } from 'lucide-react';

interface SignaturePadProps {
  value: string;
  onChange: (signature: string) => void;
  required?: boolean;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ value, onChange, required }) => {
  const signaturePad = useRef<SignatureCanvas>(null);

  useEffect(() => {
    if (value && signaturePad.current?.isEmpty()) {
      const img = new Image();
      img.onload = () => {
        const canvas = signaturePad.current?.getCanvas();
        const ctx = canvas?.getContext('2d');
        if (ctx && canvas) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };
      img.src = value;
    }
  }, [value]);

  const clear = () => {
    signaturePad.current?.clear();
    onChange('');
  };

  const handleEnd = () => {
    if (signaturePad.current) {
      const trimmedDataURL = signaturePad.current.getTrimmedCanvas().toDataURL('image/png');
      onChange(trimmedDataURL);
    }
  };

  return (
    <div className="space-y-4">
      <div className={`border-2 ${required && !value ? 'border-red-300' : 'border-gray-300'} rounded-lg`}>
        <SignatureCanvas
          ref={signaturePad}
          onEnd={handleEnd}
          canvasProps={{
            className: 'signature-canvas w-full h-40 rounded-lg',
          }}
          backgroundColor="white"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          {required && !value && (
            <p className="text-sm text-red-600">
              Signature is required
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={clear}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Eraser className="h-4 w-4 mr-2" />
          Clear Signature
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;