import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBook = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/books">Books</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-2">
          <Button variant={"outline"} size={"sm"}>
            <span className="ml-2">Cancel</span>
          </Button>

          <Button size={"sm"}>
            <span className="ml-2">Submit</span>
          </Button>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Create a new books</CardTitle>
          <CardDescription>
            Fill out the form below to create a new book
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" className="w-full" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="genre">Genre</Label>
                <Input id="genre" type="text" className="w-full" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" className="min-h-32" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="coverImage">Cover Image</Label>
                <Input type="file" id="coverImage" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="bookFile">Book PDF</Label>
                <Input type="file" id="bookFile" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default CreateBook;
