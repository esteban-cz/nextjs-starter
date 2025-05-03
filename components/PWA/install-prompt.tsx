"use client";

import { PlusSquare, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null;
  }

  if (isIOS) {
    return (
      <>
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => setShowAlert(true)}
            size="sm"
            variant="outline"
            className="inline-flex items-center space-x-1"
          >
            <PlusSquare className="h-4 w-4" />
            <span>Add to Home Screen</span>
          </Button>
        </div>
        <Dialog open={showAlert} onOpenChange={setShowAlert}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">How to Install</DialogTitle>
              <DialogDescription className="text-md flex items-center justify-center space-x-1 text-center">
                <span>Tap</span>
                <Share className="text-primary" size={16} />
                <span>then</span>
                <PlusSquare className="text-primary" size={16} />
                <span>to add to Home Screen</span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button onClick={() => setShowAlert(false)}>Got it</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
