"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Phone, IdCard, MapPinHouse } from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { companySchema, type CompanySchemaType } from "@/schemas/companySchema";
import StateSelect from "@/components/ui/state-select";

export default function CompanySetupPage() {
  const router = useRouter();
  const createCompany = api.company.create.useMutation({
    onSuccess: () => {
      toast.success("Company setup successful", {
        description: "Your company has been registered successfully.",
      });
      router.push("/dashboard");
    },
    onError: (error: { message: string }) => {
      toast.error("Error", {
        description:
          error.message ||
          "There was a problem setting up your company. Please try again.",
      });
    },
    onMutate: () => {
      toast.loading("Setting up company...", {
        description: "Please wait while we set up your company.",
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<CompanySchemaType>({
    resolver: zodResolver(companySchema),
    mode: "onTouched",
  });

  const onSubmitForm = async (data: CompanySchemaType) => {
    createCompany.mutate(data);
  };

  return (
    <main className="flex flex-1 items-center justify-center p-4 md:p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Company Setup</CardTitle>
          <CardDescription>
            Please provide your company information. This will be used on test
            reports and for account management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            <div className="flex flex-row gap-6">
              <div className="flex-1 space-y-2">
                <Label htmlFor="name">Company Name</Label>
                <div className="relative">
                  <Building2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your Company Name"
                    className="pl-8"
                  />
                </div>
                <p className="min-h-5 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="licenseNumber">Business License Number</Label>
                <div className="relative">
                  <IdCard className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="licenseNumber"
                    {...register("licenseNumber")}
                    placeholder="License Number"
                    className="pl-8"
                  />
                </div>
                <p className="min-h-5 text-sm text-red-500">
                  {errors.licenseNumber?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex-1 space-y-2">
                <Label htmlFor="email">Company Email</Label>
                <div className="relative">
                  <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="company@example.com"
                    className="pl-8"
                  />
                </div>
                <p className="min-h-5 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="phone">Company Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(123) 456-7890"
                    className="pl-8"
                  />
                </div>
                <p className="min-h-5 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              </div>
            </div>
            <fieldset className="space-y-2 rounded-md border p-4">
              <legend className="flex items-center gap-2">
                <MapPinHouse className="h-4 w-4" />
                Address
              </legend>
              <div className="flex flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <Input
                    id="addressLine1"
                    {...register("addressLine1")}
                    placeholder="123 Main St"
                  />
                  <p className="min-h-5 text-sm text-red-500">
                    {errors.addressLine1?.message}
                  </p>
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="addressLine2">Address Line 2</Label>
                  <Input
                    id="addressLine2"
                    {...register("addressLine2")}
                    placeholder="Apt, Suite, etc."
                  />
                  <p className="min-h-5 text-sm text-red-500">
                    {errors.addressLine2?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6">
                <div className="flex-2 space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" {...register("city")} placeholder="City" />
                  <p className="min-h-5 text-sm text-red-500">
                    {errors.city?.message}
                  </p>
                </div>
                <div className="flex-1 space-y-2">
                  <StateSelect control={control} errors={errors} />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="zip">Zip</Label>
                  <Input id="zip" {...register("zip")} placeholder="Zip" />
                  <p className="min-h-5 text-sm text-red-500">
                    {errors.zip?.message}
                  </p>
                </div>
              </div>
            </fieldset>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Setting up..." : "Complete Setup"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
