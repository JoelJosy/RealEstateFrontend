import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function Searchbar() {
    return (
        <div className="w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row">
              <Input type="text" placeholder="City, neighborhood, or address" className="flex-1" />
              <div className="flex gap-2">
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
    )
}