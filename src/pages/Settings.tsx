import { User, Bell, Shield, Palette, Headphones, LogOut } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const settingsSections = [
  {
    icon: <User className="w-5 h-5" />,
    title: "Profile",
    description: "Manage your account details",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Notifications",
    description: "Configure email and push notifications",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy & Security",
    description: "Password and security settings",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Appearance",
    description: "Customize your experience",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Audio Settings",
    description: "Microphone and speaker preferences",
  },
];

export default function Settings() {
  return (
    <AppLayout>
      <div className="p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-12 md:pt-0">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile Section */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
              A
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Alex Johnson</h2>
              <p className="text-muted-foreground">alex.johnson@company.com</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Alex" className="bg-secondary border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Johnson" className="bg-secondary border-border" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="alex.johnson@company.com" className="bg-secondary border-border" />
            </div>
          </div>

          <Button variant="hero" className="mt-6">
            Save Changes
          </Button>
        </div>

        {/* Settings Grid */}
        <div className="space-y-4">
          {settingsSections.map((section, index) => (
            <div
              key={section.title}
              className="glass rounded-xl p-5 flex items-center justify-between group hover:border-primary/30 transition-all duration-200 cursor-pointer animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-200">
                  {section.icon}
                </div>
                <div>
                  <p className="font-medium text-foreground">{section.title}</p>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
              <div className="text-muted-foreground">→</div>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border" />

        {/* Notification Preferences */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Quick Preferences</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates about your progress</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Weekly Summary</p>
                <p className="text-sm text-muted-foreground">Get a weekly report of your training</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Training Reminders</p>
                <p className="text-sm text-muted-foreground">Daily reminders to practice</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="glass rounded-2xl p-6 md:p-8 border-destructive/30">
          <h3 className="text-lg font-semibold text-foreground mb-2">Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Irreversible and destructive actions
          </p>
          <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
