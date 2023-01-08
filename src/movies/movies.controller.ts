import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') year: string) {
    return `We are searching for a movie made after ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
