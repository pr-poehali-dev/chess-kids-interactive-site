import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ChessBoard from './ChessBoard';
import { Button } from './ui/button';

type ChessLessonProps = {
  title: string;
  description: string;
  position?: string;
  steps?: string[];
  interactive?: boolean;
  children?: React.ReactNode;
};

const ChessLesson: React.FC<ChessLessonProps> = ({
  title,
  description,
  position,
  steps = [],
  interactive = false,
  children
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto my-6 overflow-hidden">
      <CardHeader className="bg-primary/10">
        <CardTitle className="text-2xl text-primary font-comic">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ChessBoard 
              position={position} 
              interactive={interactive} 
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              {steps.length > 0 ? (
                <>
                  <h3 className="text-lg font-medium mb-3">Шаг {currentStep + 1} из {steps.length}</h3>
                  <p className="text-gray-700">{steps[currentStep]}</p>
                </>
              ) : (
                children
              )}
            </div>
            
            {steps.length > 0 && (
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Назад
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                >
                  Дальше
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChessLesson;
